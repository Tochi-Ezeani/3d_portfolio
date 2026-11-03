const Contact = () => {
  return (
    <section className="relative max-container flex flex-col lg:flex-row">
      <div className="min-w-[50%] flex-1 flex flex-col">
        <h1 className="head-text">
          Get in Touch
        </h1>
        <form className="w-full flex flex-col gap-7 mt-14">
          <label className="font-semibold text-black-500">
            Name
          </label>
        </form>
      </div>
    </section>
  )
}

export default Contact
