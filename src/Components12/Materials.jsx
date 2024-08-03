import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Materials = () => {
  const sMaterials = useLoaderData();

  const [deleteMaterial, setDeleteMaterial] = useState(sMaterials);
  const [control, setControl] = useState(false);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(
      `https://edu-bd-server.vercel.app/studyMaterial/${_id}`,
      {
        method: "DELETE",
      },
      [control]
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remaining = deleteMaterial.filter(
            (createNote) => createNote._id !== _id
          );
          setDeleteMaterial(remaining);
          setControl(!control);
        }
      });
  };

  return (
    <div>
      <h1>Total Materials: {sMaterials.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  {/* <input type="checkbox" className="checkbox" /> */}
                </label>
              </th>
              <th>Course Name</th>
              <th>Links</th>
              <th>Download</th>
              <th>Remove Material</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {sMaterials.map((sMaterial) => (
              <tr key={sMaterial._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{sMaterial.title}</div>
                    </div>
                  </div>
                </td>
                <td>{sMaterial.email}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">
                    Download Photo
                  </button>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(sMaterial._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete material
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Materials;
