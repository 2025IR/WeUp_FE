import PostWriteHeader from "@/components/project/postWrite/Header";

const PostWrite = () => {
  return (
    <div>
      <PostWriteHeader />
      <div>
        <div>
          <p>제목</p>
          <input type="text" placeholder="제목을 입력해주세요." />
        </div>
        <div>
          <p>파일 첨부</p>
          <input type="file" />
        </div>
        <div>
          <p>내용</p>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
};

export default PostWrite;
