import axios from 'axios'

const HelloPage = ({title}) => {
    return <div>Můj title je {title}</div>;
}

export async function getServerSideProps(context) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = res.data;

    console.log("Dotaz do databáze po každém načtení v prohlížeči.")
  
    return {
      props: {title: data.title},
    }
  }
  
export default HelloPage