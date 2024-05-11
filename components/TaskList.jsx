import Link from "next/link"
import DeleteBtn from "./DeleteBtn"
import{HiPencilAlt} from "react-icons/hi"

export default function TaskList() {
  return( 
  <>
  <div>
    <div>
        <h2>Task Heading</h2>
        <div>Task Details</div>
    </div>

    <div>
        <DeleteBtn />
        <Link href={'/editTask/123'}>
            <HiPencilAlt size={24} />
        </Link>
    </div>
  </div>
  </>
  );
}
