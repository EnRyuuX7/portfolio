import styles from "./Skills.module.scss";

const Skills = () => {
  const data = [
    {
      title: "Html",
      desc: "HTML",
      dataDesc: "HTML",
    },
    {
      title: "Css",
      desc: "CSS",
      dataDesc: "CSS",
    },

    {
      title: "Scss",
      desc: "Sassy Css",
      dataDesc: "Scss",
    },
    {
      title: "Js",
      desc: "JavaScript",
      dataDesc: "Javascript",
    },

    {
      title: "React",
      desc: "ReactJs",
      dataDesc: "React",
    },
    {
      title: "Chakra",
      desc: "ChakraUI",
      dataDesc: "Chakra",
    },
    {
      title: "r-query",
      desc: "TanStack Query",
      dataDesc: "react-query",
    },
    {
      title: "NextJs",
      desc: "NextJs",
      dataDesc: "NextJs",
    },
    {
      title: "MUI",
      desc: "Material UI",
      dataDesc: "Material UI",
    },
    {
      title: "Ps",
      desc: "Photoshop",
      dataDesc: "Photoshop",
    },
    {
      title: "p5",
      desc: "p5.js",
      dataDesc: "p5.js",
    },

    {
      title: "Figma",
      desc: "Figma",
      dataDesc: "Figma",
    },
  ];
  return (
    <section id={styles.skills}>
      <div className="skills__wrapper ">
        <div className="section__heading">
          {/* <p className="section__description">I have done projects using the following.</p> */}
          <h2 className="section__title">My Skills</h2>
        </div>
        <div className="container">
          <div className={styles.skillTable}>
            {data?.map((item, index) => (
              <SkillCard
                title={item.title}
                desc={item.desc}
                dataDesc={item.dataDesc}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, desc, dataDesc, index }) => {
  return (
    <div
      className={`${styles.skillElement}  ${styles[`gra${index}`]}`}
      data-description={dataDesc}
    >
      <div className={styles.skillElementInner}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{desc}</div>
      </div>
    </div>
  );
};

export default Skills;
