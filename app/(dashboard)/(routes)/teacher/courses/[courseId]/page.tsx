import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { error } from "console";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  //   const {userId} = auth();
  //   if(!userId){
  //     return redirect("/");
  //   }
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });
  if (!course) {
   return redirect("/")
  }
  return <div>CourseId : {params.courseId}</div>;
};

export default CourseIdPage;
