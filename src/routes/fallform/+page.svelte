<script>
// READ: rn ts is kind of not very secure, dont deploy to prod yet
  import { supabase } from '$lib/supabase'

  let submitting = false
  let message = ''

  async function submitForm() {
    message = ''

    const email = document.getElementById('email').value.trim()
    const title = document.getElementById('title').value.trim()
    const info = document.getElementById('info').value.trim()
    const blurb = document.getElementById('blurb').value.trim()
    const terms = document.getElementById('terms').checked
    const file = document.getElementById('upload').files[0]

    const extension = file.name.split('.').pop().toLowerCase()

    if (!['pdf', 'doc', 'docx'].includes(extension)) {
    message = 'Only .pdf, .doc, and .docx files are allowed.'
    return
    }

    if (!email || !title || !info || !blurb || !file) {
      message = 'Please fill out every field and upload your story.'
      return
    }

    if (!terms) {
      message = 'You must agree to the Terms of Publication.'
      return
    }

    const wordCount = blurb.split(/\s+/).filter(Boolean).length

    if (wordCount > 50) {
      message = `Your blurb is ${wordCount} words. The maximum is 50.`
      return
    }

    submitting = true

    try {
      const submissionId = crypto.randomUUID()

      const safeFilename = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')

      const filePath = `${submissionId}/${safeFilename}`

      const { error: uploadError } = await supabase.storage
        .from('story-submissions')
        .upload(filePath, file, {
          contentType: file.type,
          upsert: false
        })

      if (uploadError) {
        throw uploadError
      }

      const { error: databaseError } = await supabase
        .from('submissions')
        .insert({
          id: submissionId,
          email,
          title,
          author_info: info,
          blurb,
          file_path: filePath,
          original_filename: file.name,
          mime_type: file.type,
          file_size: file.size,
          terms_accepted: true
        })

      if (databaseError) {
        throw databaseError
      }

      message = 'Submission received successfully!'

    } catch (error) {
      console.error(error)
      message = 'Something went wrong while submitting. Please try again.'
    } finally {
      submitting = false
    }
  }
</script>
<h1>Email: </h1>
<p>Please enter your email address exactly. You can use a parent or guardian's email. This is how we'll notify you if you are one of the short stories selected to be published. Due to the number of applications, we might not be able to give back rejection notices, we apologize. <p> 
<input id="email" placeholder="email">
<h1>Your short story title:</h1>
<input id="title" placeholder="title">
<h1>Your full name(s), age(s), grade(s), school(s):</h1>
<p>If you or a teammate wish to remain anonymous both here and in the book publication if selected as a winner, make sure to specify here. </p>
<input id="info" placeholder="info"> 
<h1>Your short response blurb (50 words max):</h1>
<textarea id="blurb" placeholder="blurb">  </textarea>
<h1>Upload your file or folder</h1>
<p>Accepted file types for stories are .docx .doc .pdf. Max 20MB file upload. If your short story was handwritten, type it out and attach as a document. Font and formatting will be adjusted as needed by us! If you have an illustration, attach them inside the document. If you are a teacher submitting mass amounts of stories, upload a folder and ensure student names are inside their story. We will contact you at the email you provide regarding a specific student's success. Please keep an eye out around Nov 1st - Nov 30th for an email.</p>
<input id="upload" type="file">
<h1> Terms of Publication </h1> 
<p>By checking this box, authors and parents agree to have their short story, blurb, and photo (if attached) published in the Young Author's Anthology, distributed to elementary school libraries, and featured on the website in future years. Please make sure to review our Terms and Conditions on the yaa.org as this description is only a condensed version of those terms. </p> 
<input id="terms" type="checkbox"> 
<br> 

<button
  onclick={submitForm}
  disabled={submitting}
>
  {submitting ? 'Submitting...' : 'Submit'}
</button>

<p>{message}</p>