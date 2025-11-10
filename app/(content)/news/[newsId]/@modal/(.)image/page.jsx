import ModalBackDrop from "@/components/modalBackDrop";
import { DUMMY_NEWS } from "@/dummy";

const ImageView = async ({params}) => {
  const { newsId } = await params; // Properly await params, then destructure
   console.log("the parasm",params);
   
   if (!params.newsId) {
    return notFound(); // loads normal route instead of intercept
  }

  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsId);

  // Add null check - this prevents the crash
  if (!newsItem) {
    return null; // or show error message
  }

  return (
    <>
      <ModalBackDrop>
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      </ModalBackDrop>
    </>
  );
};

export default ImageView;
