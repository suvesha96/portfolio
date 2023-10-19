//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graduate Student Researcher",
    cardImage: "assets/images/experience-page/gradstudentresearcher.JPG",
    place: "Transformative Robotics Lab & <a href = 'https://depts.washington.edu/airlab/' target='_blank' >Autonomous Insect Robotics Lab</a> &ensp;<a href = 'https://drive.google.com/drive/folders/1TVGtKdo_SvVDQj_Rqz-2JUeZanE6MFI6?usp=sharing' target='_blank'><img src='assets/images/experience-page/stack-of-photos.png' height=35></a>",
    time: "(Oct, 2019 - Present)",
    desp: "<li> Designed and modeled a kirigami based compliant mechanism inspection robot from scratch (on Solidworks), ran structural simulation for large deflection problems using <strong>ANSYS WORKBENCH</strong>.</li> <li>Handled the prototyping and iterative design of the mechanism and pivoted towards miniaturizing a similar system using in-plane bending of the hinges for nitinol cut catheters and stents.</li> <li>Built and tested a bilayer auxetic actuators for high load carrying capacity [Extended abstract accepted at <a href='https://softroboticsconference.org/' target = '_blank' >ROBOSOFT 2021</a>].</li><li>Additionally, designed and built a lightweight (<1g) passive hinge mechanism for mounting solar panels onto solar drone [under review: IROS 2021] </li>",
  },
  {
    title: "<a href = 'https://www.washington.edu/news/2020/04/16/how-to-move-hands-on-classes-online/' target = '_blank'> Graduate Teaching Assistant</a>",
    cardImage: "assets/images/experience-page/millmakerspace.JPG",
    place: "University of Washington, Seattle&ensp;<a href = 'https://drive.google.com/drive/folders/1-XEY-RSHyCJx8mkNQP7XoD1ziK3pYLye?usp=sharing' target='_blank'><img src='assets/images/experience-page/youtube.png' height=35></a>",
    time: "(Jan, 2020 - Present)",
    desp: "\
    <li>Teaching Assistant: ENGR 105- Introduction to Engineering Design, WI-21, Spr-20, Wi-2021, UW \
      <ul style='min-height: 0; padding-top: 8px !important;'>\
        <li style='font-size:0.9em'>Developed course content from scratch on CAD modeling using Fusion 360.</li>\
        <li style='font-size:0.9em'>Actively converted & adapted the course (primarily in-person) to online learning within a fortnight owing to the pandemic</li>\
      </ul>\
    </li>\
    <li>Course Instructor: ENGR 498 – EDC Class, Fall-20, UW\
      <ul style='min-height: 0; padding-top: 8px !important;'>\
        <li style='font-size:0.9em'>Delivered content on Engineering Drawing & CAD (Fusion 360) and Rapid Prototyping (Remotely).</li>\
        <li style='font-size:0.9em'>Mentored undergrads to lead lab section, conducted performance reviews and quarterly goal reflections.</li>\
      </ul>\
    </li>",
//     desp: "<ul>\
//   <li>Coffee</li>\
//   <li>Tea\
//     <ul>\
//       <li>Black tea</li>\
//       <li>Green tea</li>\
//     </ul>\
//   </li>\
//   <li>Milk</li>\
// </ul>"
  },
  {
    title: "Lab Engineer ",
    cardImage: "assets/images/experience-page/makers.png",
    place: "Makerspace, Mumbai <a href = 'https://drive.google.com/drive/folders/1lqaE22AkgXWNM8T7hz5qi6sGETZv84Zo?usp=sharing' target='_blank'><img src='assets/images/experience-page/stack-of-photos.png' height=35></a>",
    time: "(Oct, 18 - May, 19)",
    desp:"<li>Headed the digital fabrication lab. Provided rapid prototyping support for <a href = 'https://www.makersasylum.com/projects/maker-auto-1/' target='_blank'>Maker Auto 2- plastic recycling lab</a>.</li><li>Handled the testing and upgrading of the plastic extrusion process in Maker Auto 2.0.</li><li>Conducted Drone building workshop (with Drona Aviation) and scaled up management on Junior maker’s program.</li><li>Managed and planned international events of the Makerspace (<a href = 'https://www.makersasylum.com/events/s-t-e-a-m-school/' target='_blank'>S.T.E.A.M School 2018</a>, <a href = 'https://www.makersasylum.com/events/d-i-v-e-november-2019/' target='_blank'>D.I.V.E 2019</a>)</li>",
  },
  {
    title: "Research Trainee",
    cardImage: "assets/images/experience-page/barc.jpg",
    place: "Refueling Technology Division, National Lab <a href = 'https://drive.google.com/drive/folders/17_jmSc734baVoLjNouNkSdd3lDg5ejn-?usp=sharing' target='_blank'><img src='assets/images/experience-page/stack-of-photos.png' height=35></a>",
    time: "(Jun, 2017 – May, 2018)",
    desp: "<li style='font-size:0.9em'>Modeled the temperature distribution on high temperature impact of a split Hopkinson pressure bar (SHPB) & super alloy sample, to study the thermo-mechanical properties of the interaction on <strong>ANSYS Workbench</strong>.</li>\
    <li style='font-size:0.9em'>Developed <strong>alternative insulation</strong> for the pressure bars, called carbon foam.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
