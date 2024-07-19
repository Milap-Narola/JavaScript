function initialize() {
    const html = document.getElementById('HTML');
    const css = document.getElementById('CSS');
    const js = document.getElementById('JS');
    const iframe = document.getElementById('code');

    function updateIframe() {
        const documentContent = `
            ${html.value}
            <style>${css.value}</style>
            <script>${js.value}<\/script>
        `;
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(documentContent);
        iframeDoc.close();
    }

    html.addEventListener('input', updateIframe);
    css.addEventListener('input', updateIframe);
    js.addEventListener('input', updateIframe);

    updateIframe();
}

initialize();
