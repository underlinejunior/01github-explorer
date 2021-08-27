import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

const repository={
  name:'unform',
  description:'Forms in React',
  link:'https://github.com/unform/unform'
}
export function RepositoryList(){
  return(
  <section className="respository-List">
    <h1>Lista de repositórios</h1>
<ul>
<RepositoryItem repository={repository}/>
<RepositoryItem/>
<RepositoryItem/>
<RepositoryItem/>
</ul>
  </section>
  );
  }