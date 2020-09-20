import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          <p>
            Hi, my name is Artjom. I am 21 years old and currently studying a
            BSC in Software Engineering in Amsterdam.
          </p>
          <p>
            For a long time I have had a passion for the IT sector due to being
            active in it for many years. I love helping people with their IT
            problems, which led me to work at the tech support centre of a
            internet + TV + telephone provider company.
          </p>
          Right now I'm focusing on learing Front End Web development, and
          Android App development. I can speak fluent Russian, Dutch, and
          English as well as some German.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
