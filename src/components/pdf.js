import React from 'react';
import { Document, Page } from 'react-pdf';
import Row from 'react-bootstrap/Row';
export default function SinglePage(props) {
  const { pdf } = props;

  return (
    <>
      <Document file={pdf} options={{ workerSrc: '/pdf.worker.js' }}>
        <Row>
          <Page pageNumber={1} />
          <Page pageNumber={2} />
          <Page pageNumber={3} />
        </Row>
      </Document>
      <div></div>
    </>
  );
}
