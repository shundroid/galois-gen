const a = document.createElement('a')
a.style.display = 'none'
a.download = 'book.png'
document.body.appendChild(a)

export default function downloadImage (imageUrl) {
  a.href = imageUrl
  a.click()
}
