import html2canvas from 'html2canvas'

export default function makeImage () {
  return new Promise(resolve => {
    html2canvas(document.getElementById('book')).then(canvas => {
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob)
        resolve(url)
      })
    })
  })
}
