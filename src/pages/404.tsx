import * as React from "react"
import { Link } from "gatsby"


// markup
const NotFoundPage = () => {
  return (
    <main className="fluid-container bg-color-3 text-white min-vh-100 flex-column d-flex justify-content-center align-items-center">
      <title>Not found</title>
      <h1 className="mb-4">Page not found 404</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn't find what you were looking for.
      </p>
      <Link to="/">Go home</Link>
    </main>
  )
}

export default NotFoundPage
