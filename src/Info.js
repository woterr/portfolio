function Info(props) {

  return (
    <>
      <main className="main">
        <section className="section">
            <div className="container info">
                <h1 className="section_title">{props.info}</h1>
                <p className="description">{props.description}</p>
            </div>
        </section>
      </main>
    </>

  );
}

export default Info;
