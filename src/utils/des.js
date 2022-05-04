// 加密解密字符串
import cryptoJs from 'crypto-js'

// 随机生成指定数量的16进制key（该方法非必须，也可自己指定key）
const generateKey = 'abcd@1234'
/*
* message:需要解密的字符串，
* key： 密钥
*/
// DES加密
const encryptDes = (message) => {
  const keyHex = cryptoJs.enc.Utf8.parse(generateKey)
  const option = { mode: cryptoJs.mode.ECB, padding: cryptoJs.pad.Pkcs7 }
  const encrypted = cryptoJs.DES.encrypt(message, keyHex, option)
  return encrypted.ciphertext.toString() // 返回hex格式密文，如需返回base64格式：encrypted.toString()
}

// DES解密
const decryptDes = (message) => {
  const keyHex = cryptoJs.enc.Utf8.parse(generateKey)
  const decrypted = cryptoJs.DES.decrypt(
    {
      ciphertext: cryptoJs.enc.Hex.parse(message)
    }, // 若 message 是 base64 格式，则无需转16进制hex，直接传入 message 即可
    keyHex,
    {
      mode: cryptoJs.mode.ECB,
      padding: cryptoJs.pad.Pkcs7
    }
  )
  return decrypted.toString(cryptoJs.enc.Utf8)
}

export {
  encryptDes,
  decryptDes
}
