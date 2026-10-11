<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap" rel="stylesheet">

<div id="centered">
    <h1 id="title"><u>MEET THE TEAM!</u></h1>
    <img src="/team/team.png" id="team_photo">
    <section class="team-section">
        <div class="team-container">
            <div class="team-card">
                <div class="image-box"><img src="/team/shruthi.JPG"></div>
                <div class="member-info">
                    <h3>Shruthi Inamdar</h3>
                    <p class="role">Lead of Finance and Communications</p>
                    <p class="email">sinamdar@davidsonacademy.unr.edu</p>
                </div>
            </div>

            <div class="team-card">
                <div class="image-box"><img src="/team/ishan.png"></div>
                <div class="member-info">
                    <h3>Ishan Panda</h3>
                    <p class="role">President</p>
                    <p class="email">ipanda@davidsonacademy.unr.edu</p>
                </div>
            </div>

            <div class="team-card">
                <div class="image-box"><img src="/team/ethanahn.jpg"></div>
                <div class="member-info">
                    <h3>Ethan Ahn</h3>
                    <p class="role">Vice President</p>
                    <p class="email">eahn@davidsonacademy.unr.edu</p>
                </div>
            </div>

            <div class="team-card">
                <div class="image-box"><img src="/team/anton.jpeg"></div>
                <div class="member-info">
                    <h3>Anton Laus</h3>
                    <p class="role">Judge</p>
                </div>
            </div>
                        <div class="team-card">
                <div class="image-box"><img src="/team/stella.jpeg"></div>
                <div class="member-info">
                    <h3>Stella Huang</h3>
                    <p class="role">Judge</p>
                </div>
            </div>
            <div class="team-card">
                <div class="image-box"><img src="/team/ana.jpeg"></div>
                <div class="member-info">
                    <h3>Ana Wang</h3>
                    <p class="role">Judge</p>
                </div>
            </div>
                        <div class="team-card">
                <div class="image-box"><img src="/team/priya.jpeg"></div>
                <div class="member-info">
                    <h3>Priya Konduru</h3>
                    <p class="role">Book Editor</p>
                </div>
            </div>

            <div class="team-card">
                <div class="image-box"><img src="/team/akhila.jpeg"></div>
                <div class="member-info">
                    <h3>Akhila Vuppalapati</h3>
                    <p class="role">Book Editor</p>
                </div>
            </div>
            <div class="team-card">
                <div class="image-box"><img src="/team/elise.jpeg"></div>
                <div class="member-info">
                    <h3>Elise Church</h3>
                    <p class="role">Book Editor</p>
                </div>
            </div>
            <div class="team-card">
                <div class="image-box"><img src="/team/wyatt.png"></div>
                <div class="member-info">
                    <h3>Wyatt Abrahamson</h3>
                    <p class="role">General Timekeeper</p>
                </div>
            </div>
            <div class="team-card">
                <div class="image-box"><img src="/team/melania.jpeg"></div>
                <div class="member-info">
                    <h3>Melania Plyaskevich</h3>
                    <p class="role">Judge</p>
                </div>
            </div>
            <div class="team-card">
                <div class="image-box"><img src="/team/kalyani.jpeg"></div>
                <div class="member-info">
                    <h3>Kalyani Pagilla</h3>
                    <p class="role">Judge</p>
                </div>
            </div>
            <div class="team-card">
                <div class="image-box"><img src="/team/ashley.jpeg"></div>
                <div class="member-info">
                    <h3>Ashley Wu</h3>
                    <p class="role">Treasurer</p>
                </div>
            </div>
            <div class="team-card">
                <div class="image-box"><img src="/team/angie.jpeg"></div>
                <div class="member-info">
                    <h3>Angie Yu</h3>
                    <p class="role">Judge Coordinator</p>
                </div>
            </div>
            <div class="team-card">
                <div class="image-box"><img src="/team/eliana.jpeg"></div>
                <div class="member-info">
                    <h3>Eliana Manna</h3>
                    <p class="role">Judge</p>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    #team_photo {
        width:80vw;
    }
    #title {
        font-family: "Castoro Titling", serif;
        font-weight: 400;
        font-size: 3.5rem; 
        font-style: normal;
        margin-bottom: 20px;
    }
    
    #centered {
        position: absolute;
        width: 100vw; 
        top: 50px; 
        text-align: center;
    }

    .team-section {
        background-color: #fcf8eb;
        font-family: 'Times New Roman', serif;
        padding: 40px 20px;
        display: flex;
        justify-content: center; 
    }

    .team-container {
        display: grid;
        grid-template-columns: repeat(3, 260px); 
        justify-content: center;
        gap: 120px;
        margin: 0 auto;
    }

    .team-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%; 
    }

    .image-box {
        width: 100%;
        height: 340px;
        border: 3px solid #000000;
        background-color: #fcf8eb;
        margin-bottom: 15px;
        overflow: hidden;
    }

    .image-box img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }

    .member-info {
        text-align: left;
        width: 100%; 
    }

    .member-info h3 {
        margin: 5px 0;
        font-size: 1.2rem;
    }

    .member-info p {
        margin: 2px 0;
        color: #333;
        font-size: 0.9rem; 
    }
    .role {
        font-style: italic; 
    }
    @media (max-width: 900px) {
        .team-container {
            grid-template-columns: repeat(auto-fit, 260px);
        }
    }
</style>