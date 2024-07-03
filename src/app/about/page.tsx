import { BlogPosts } from "@/components/posts";
import config from "@/configs/config.json";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {`About Me`}
      </h1>
      <p className="mb-4">{`I'm Eric Quinn, a dynamic Full Stack Developer and aspiring technology leader passionate 
      about building and scaling innovative web solutions. With a rich background in developing robust applications and 
      driving platform strategy, I am skilled in a range of modern programming languages and frameworks, including JavaScript, 
      SQL, React.js, and Node.js.`}</p>
      <p className="mb-4">{`Since beginning my career in 2013, I've honed my skills in full stack development, specializing 
      in both front-end and back-end technologies. My journey has been marked by a steadfast commitment to technical 
      excellence and collaborative success, which is reflected in the scalable and efficient solutions I’ve developed. I 
      currently work at Salesforce, where I enhance platform functionalities and integrate sophisticated systems that serve 
      thousands of users.`}</p>
      <p className="mb-4">{`My technical prowess is matched by a proven leadership track record. I'm dedicated to fostering 
      an environment of teamwork and innovation, leading by example and mentoring peers to elevate our collective capabilities. 
      Annually, I undertake significant leadership projects that not only showcase my skills but also drive innovation and team success.`}</p>
      <p className="mb-4">{`I am also a lifelong learner, continuously upgrading my skills to keep pace with the latest in 
      technology. I believe in the power of communication and strive to improve my interpersonal skills to lead more 
      effectively and make a positive impact on my team and projects.`}</p>
      <p className="mb-4">{`As I look to the future, I am eager to take on new challenges that push the boundaries of 
      what technology can achieve. Through my website, I share insights from my experiences and explore new trends in 
      the tech world.`}</p>
      <p className="mb-4">{`Thank you for visiting my portfolio. Let's connect and create something great together!`}</p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
