import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostProps } from './components/Post';

import styles from './App.module.css';

import './global.css';

interface Post extends PostProps {
  id: number
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabrielvbauer.png",
      name: "Gabriel Bauer",
      role: "FullStack Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ð' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-15 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/joaovm3.png",
      name: "JoÃ£o Victor",
      role: "FullStack Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ð' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-16 17:40:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}