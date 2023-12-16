import { Link } from 'react-router-dom';
function Giris(){
  
  const username='Caner'
  const isActive = true
  const pageStyle = { backgroundColor: '#ECCCCE'}

  return(
    <>
    <h1 className="AnaBaslik" style={{backgroundColor:`${isActive?"gray":"red"}`}}>
        Hello I'm {username}</h1>
    <h3 >Welcome to my page.</h3>   
    <h2 style={{backgroundColor:"gray"}}>Who am I ?</h2>
    <p>I am Caner Özer. I am currently studying Electrical and Electronics Engineering at Selçuk University. I am an individual who combines my passion for technology with my openness to research and learning. I have a social spirit, and keeping up with the rapidly changing trends in the world of technology has become a passion for me.</p>
    <p>Being open to innovations and keeping pace with the speed of technology is an experience that continually excites me. Witnessing the evolution of technology directs me towards new discoveries, and I want to share these discoveries with others.</p>    
    <img style={{padding:"0px",margin:0,borderRatius:"16px",border:"6px solid #808080"}} width={200}  src="https://media.licdn.com/dms/image/D4D03AQHFyo1mNVkd6w/profile-displayphoto-shrink_400_400/0/1682461469390?e=1703721600&v=beta&t=Y14KecjQzdEjXbGLAlvC7_7BvnsksJ56DZeyGPm8a04"alt="" /> 
    <h2 style={{backgroundColor:"gray"}}>What am I interested in ?</h2>
    <p>I am someone who takes steps into the world of electronic software with my passion and curiosity. I make continuous efforts to improve and advance myself in software development on platforms such as PLC, PIC, and Arduino, especially.

PLC (Programmable Logic Controller), PIC microcontrollers, and systems like Arduino are not just parts of the electronic world for me; they are also platforms for creativity and problem-solving. My interest in software development processes in these systems motivates me to understand and control complex systems.

Among the projects I have undertaken in the past are PLC programming in industrial automation systems, microcontroller-based smart devices, and Arduino projects. These projects not only enhance my software skills but also increase my abilities to understand the interaction between electronic hardware and software.

In every new project, I find opportunities to challenge myself with various difficulties, such as understanding the logic of hardware, communicating with sensors, and integrating various modules, in addition to the coding process. This process is pushing me towards becoming a professional who can rapidly adapt to changes in both the software and electronic worlds.

In the future, I aim to work on more complex and innovative projects in these fields and share this knowledge. I am determined to continue my passion for continuous learning and development on this exciting journey in the world of electronic software.</p>
    </>
  )
}
function ProjectList()
{
    const Projects=["Calculator", "Sudoku", "PictureGallery", ]

    return(
        <>
        <h2 style={{backgroundColor:"gray"}}>My Projects : {Projects.length}</h2>     
        <ul style={{margin:0,padding:0}}>
          {Projects.map((project, index)=><li key={index}>{project}</li>)}
        </ul>
        </>
    )
}


function SosyalMedyaButton(){
  return (
    <>
    <h2 style={{backgroundColor:"gray"}}>My Social Media Accounts</h2>
    <a href="http://linkedin.com/in/canerzer">
      <button >
      <img
          src="src/social-media-icon/linkedin.svg"  // Logo dosyanızın yolu
          alt="Linkedin-Logo"      // Logo için bir alternatif metin
          style={{ width: '50px', height: '50px' }}  // İsteğe bağlı: boyutu belirtmek için stil
        /></button>
    </a>
    <a href="http://instagram.com/canerzer">
      <button >
      <img
          src="src/social-media-icon/instagram.svg"  // Logo dosyanızın yolu
          alt="Instagram-Logo"      // Logo için bir alternatif metin
          style={{ width: '50px', height: '50px' }}  // İsteğe bağlı: boyutu belirtmek için stil
        /></button>
    </a>
    <a href="http://github.com/canerzer">
      <button >
      <img
          src="src/social-media-icon/github.svg"  // Logo dosyanızın yolu
          alt="GitHub-Logo"      // Logo için bir alternatif metin
          style={{ width: '50px', height: '50px' }}  // İsteğe bağlı: boyutu belirtmek için stil
        /></button>
    </a>
    
    </>
  )
}

export { Giris,ProjectList, SosyalMedyaButton };
