import React, { useEffect } from 'react';

function PdfViewer({ clientId }) {
  useEffect(() => {
    document.addEventListener('adobe_dc_view_sdk.ready', () => {
      const adobeDCView = new AdobeDC.View({
        clientId: clientId,
        divId: 'adobe-dc-view',
      });
      adobeDCView.previewFile({
        content: {
          location: { url: 'https://documentservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf' },
        },
        metaData: { fileName: 'Bodea Brochure.pdf' },
      });
    });
  }, [clientId]);

  return <div id="adobe-dc-view"></div>;
}

export default PdfViewer;
