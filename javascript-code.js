
    document.addEventListener('DOMContentLoaded', function () {
      const fileInput = document.getElementById('fileInput');
      const pdfViewer = document.getElementById('pdf-viewer');
      const fullscreenBtn = document.getElementById('fullscreen-btn');

      // Handle file input change
      fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file && file.type === 'application/pdf') {
          const pdfUrl = URL.createObjectURL(file);
          pdfViewer.src = pdfUrl;
        } else {
          alert('Please select a valid PDF file.');
        }
      });

      // Toggle fullscreen
      fullscreenBtn.addEventListener('click', function () {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          pdfViewer.requestFullscreen();
        }
      });
    });
  