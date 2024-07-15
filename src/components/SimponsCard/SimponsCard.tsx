import { SimposonsCardProps } from "./types";
import { CardWrapper, CardItem, Avatar } from "./styles";

// Комаоненты, как и обычные функции могут принимать аргументы
// Но может принимать в себя только 1 аргумент - это ОБЬЕКТ!!!
// Этот объект называется props
// По умолчанию props - пустой объект, если вы в него ничего не передаете
// function SimponsCard({ simpsonData }: SimposonsCardProps) {
// const {avatar, firstName, lastName, job, hobby} = simpsonData;
function SimponsCard({
  avatar,
  firstName,
  lastName,
  job,
  hobby,
}: SimposonsCardProps) {
  return (
    <CardWrapper>
      <Avatar src={avatar} alt="Avatar" />
      <CardItem>Full name: {`${firstName} ${lastName}`}</CardItem>
      <CardItem>Job: {job}</CardItem>
      <CardItem>Hobby: {hobby}</CardItem>
    </CardWrapper>
  );
}

export default SimponsCard;
