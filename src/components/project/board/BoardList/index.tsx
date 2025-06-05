import {
  BoardLabel,
  BoardMain,
  CardInfo,
  CardWrapper,
  ListContainer,
  UserInfo,
} from "./style";
import IconLabel from "@/components/common/IconLabel";
import { BoardListProps } from "./type";
import { AiOutlinePaperClip } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

const formatDate = (datetime: string | null) => {
  if (!datetime) return "날짜 없음";
  const date = new Date(datetime);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const BoardList = ({ posts, isLoading }: BoardListProps) => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  if (isLoading) return <p>로딩 중...</p>;
  if (!posts.length) return <p>게시글이 없습니다.</p>;

  return (
    <ListContainer>
      {posts.map((post) => (
        <CardWrapper
          key={post.boardId}
          onClick={() => navigate(`/project/${projectId}/post/${post.boardId}`)}
        >
          <CardInfo>
            <BoardLabel tag={post.tag}>
              <p>{post.tag}</p>
            </BoardLabel>
            <BoardMain>
              <p>{post.title}</p>
              {post.hasFile && <AiOutlinePaperClip />}
            </BoardMain>
          </CardInfo>
          <UserInfo>
            <IconLabel type="image" size="lg" full icon={post.profileImage}>
              {post.nickname}
            </IconLabel>
            <p>{formatDate(post.boardCreatedTime)}</p>
          </UserInfo>
        </CardWrapper>
      ))}
    </ListContainer>
  );
};

export default BoardList;
