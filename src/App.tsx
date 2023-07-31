import './App.css';
import ActiveTable from './components/Table';
import Header from './components/Header';

// import Footer from './components/Footer';

function App() {
  return (
    <>
<Header/>
    <main>
      <section className="container-lg">
<ActiveTable/>
      </section>

      {/* <section className="container-lg">
        <table className="table table-category table-hover">
          <thead className="thead">
            <tr>
              <th scope="col"></th>
              <th scope="col">Note Category</th>
              <th scope="col">Active</th>
              <th scope="col">Archived</th>
            </tr>
          </thead>
          <tbody id="tableBodyCategory"></tbody>
        </table>
        </section> */}
            </main>
{/* <Footer /> */}
    </>
  );
}

export default App;
