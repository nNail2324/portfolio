import styles from './App.module.css'
import { Content } from './components/Content/Content'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

const projects = [
  {imagePath: "cover-1.png", title: "Интернет-магазин", stack: ["React.js", "Express.js", "MySql"], link: "https://github.com/nNail2324/OnlineStore"},
  {imagePath: "cover-2.png", title: "Библиотека по ИИ", stack: ["React.js", "Supabase"], link: "https://github.com/nNail2324/aipedia-v2"},
  {imagePath: "cover-3.png", title: "Оно тебе надо", stack: ["HTML", "CSS"], link: "https://github.com/nNail2324/ono-tebe-nado-fd"},
  {imagePath: "cover-4.png", title: "С чистого листа", stack: ["HTML", "CSS"], link: "https://github.com/nNail2324/s-chistogo-lista"},
  {imagePath: "cover-5.png", title: "Посмотри в окно", stack: ["HTML", "CSS"], link: "https://github.com/nNail2324/posmotri-v-okno-fd"},
  {imagePath: "cover-6.png", title: "Надо сделать идеально", stack: ["HTML", "CSS"], link: "https://github.com/nNail2324/nado-sdelat-idealno"},
  {imagePath: "cover-7.png", title: "Сложно сосредоточиться", stack: ["HTML", "CSS"], link: "https://github.com/nNail2324/slozhno-sosredotochitsya-fd"},
  {imagePath: "cover-8.png", title: "Закрывающий тег", stack: ["HTML", "CSS", "JavaScript"], link: "https://github.com/nNail2324/zakrivayuschiy-teg-f"},
  {imagePath: "cover-js.png", title: "Парсинг сайта", stack: ["HTML", "CSS", "JavaScript"], link: "https://github.com/nNail2324/website-parsing"},
  {imagePath: "cover-js.png", title: "Умная таблица", stack: ["HTML", "CSS", "JavaScript"], link: "https://github.com/nNail2324/smart-table"},
]

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content projects={projects} />
      <Footer />
    </div>
  )
}

export default App
