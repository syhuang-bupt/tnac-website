export function passwordScore (password) {
  // 存在数字，小写字母，大写字母，特殊字符分别+1分
  var modes = 0
  if (password.length < 6) return 0
  if (/\d/.test(password)) modes++
  if (/[a-z]/.test(password)) modes++
  if (/[A-Z]/.test(password)) modes++
  if (/\W/.test(password)) modes++
  if (password.length > 12) return 4
  return modes
}
