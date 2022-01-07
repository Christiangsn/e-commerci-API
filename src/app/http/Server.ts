import app from './App'
import '@infra/typeorm/'

app.listen(3333, () => {
  console.log('Server is running on port 3333!')
})
