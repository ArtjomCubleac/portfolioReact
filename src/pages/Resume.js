import React from 'react';
import Hero from '../components/Hero';

import pdfFile from '../assets/CV-English.pdf';

import SinglePagePDFViewer from '../components/pdf';

function Resume(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={'My experiences en skills'} />
      <SinglePagePDFViewer pdf={pdfFile} />
    </div>
  );
}

export default Resume;
