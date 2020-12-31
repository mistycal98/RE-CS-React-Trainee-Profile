// import { Component } from "react";
// import {Link} from "react-router-dom";

// class EmployeeCard extends Component {
//   render() {
//     let { employee } = this.props;
//     return (
//       <div
//         className={[
//           styles["trainee"],
//           styles["flex-box"],
//           styles["shadow"],
//         ].join(" ")}>
//         <div className={styles["trainee-pic"]}>
//           <img
//             src={employee.imageUrl}
//             alt={employee.firstName + "Profile Picture"}
//           />
//         </div>
//         <p
//           className={[styles["trainee-name"], styles["trainee-link"]].join(
//             " ",
//           )}>
        
//           <Link
//             to={{
//               pathname: `employees/${employee.id}`,
//               state: { id: employee.id },
//             }}>
//             {" "}
//             {employee.firstName} {employee.lastName}{" "}
//           </Link>
//           <br />
//           <span className={styles["company"]}> {employee.company} </span>
//         </p>
//       </div>
//     );
//   }
// }

// export default EmployeeCard;