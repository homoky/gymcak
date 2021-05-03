import Counter from './../components/Counter'

const HomePage = () => {
    return <div>
        Welcome to Next.jss! Go to {" "}
        <Counter defaultValue={5} incrementor={5} />
        <Counter incrementor={10} />
        <Counter defaultValue={100} />
        <Counter />
        <Counter />
        <Counter />
    </div>
}
  
export default HomePage