import {
  BoardLabel,
  CardInfo,
  CardWrapper,
  ListContainer,
  UserInfo,
} from "./style";
import IconLabel from "@/components/common/IconLabel";
import { BoardListProps } from "./type";

const BoardList = ({ posts, isLoading }: BoardListProps) => {
  if (isLoading) return <p>로딩 중...</p>;
  if (!posts.length) return <p>게시글이 없습니다.</p>;

  return (
    <ListContainer>
      {posts.map((post) => (
        <CardWrapper key={post.boardId}>
          <CardInfo>
            <BoardLabel>{post.tag}</BoardLabel>
            <p>{post.title}</p>
          </CardInfo>
          <UserInfo>
            <IconLabel size="md" full icon={post.profileImage}>
              {post.nickname}
            </IconLabel>
            <p>{post.boardCreatedTime || "작성일 없음"}</p>
          </UserInfo>
        </CardWrapper>
      ))}
    </ListContainer>
  );
};

export default BoardList;
