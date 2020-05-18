const { createCanvas, loadImage } = require('canvas')
const bg = './assets/demotivator.png'

const imageProperties = {
  width: 714,
  height: 745
}

const canvas = createCanvas(imageProperties.width, imageProperties.height)

const demotivatorImage = async (img, title, subtitle) => {
  const ctx = canvas.getContext('2d')
  ctx.font = '48px Times New Roman'

  const image = await loadImage(bg)
  ctx.drawImage(image, 0, 0)
  const avatar = await loadImage(img.attachment)
  ctx.drawImage(avatar, 46, 46, 622, 551)

  ctx.fillStyle = '#fff'
  ctx.textAlign = 'center'
  ctx.fillText(title, 345, 660)

  ctx.font = 'normal 40px Times New Roman'
  ctx.fillStyle = '#fff'
  ctx.textAlign = 'center'
  ctx.fillText(subtitle, 346, 710)

  const buffer = canvas.toBuffer('image/png')
  return buffer
}

module.exports = demotivatorImage