import { Link } from "react-router";

export function ListCard({ projekt }) {
  return (
    <>
      <div className="card bg-base-100 w-80 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {projekt.title}</h2>
          <p>{projekt.description}</p>
          <div className="card-actions justify-end mt-6">
            <Link
              to={`/dashboard/list/${projekt.id}`}
              className="btn btn-neutral"
            >
              Work on it
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
