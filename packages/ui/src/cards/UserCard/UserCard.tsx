import { Avatar, Card } from "../../elements";

export interface ISkills {
  skillInfo: {
    _id: string;
    name: string;
    __typename: string;
  };
}

export interface UserCardProps {
  name?: string;
  avatar?: string;
  title?: string;
  percentage?: number;
  skills?: ISkills[];
  endorsements?: number;
  focused?: boolean;
}

export const UserCard = ({
  name,
  avatar,
  //   title,
  percentage,
  skills,
  endorsements,
  focused,
}: UserCardProps) => {
  return (
    <Card shadow focused={focused}>
      <div className="flex justify-between">
        <div>
          <Avatar src={avatar} />
        </div>
        <div className={`w-full pl-6`}>
          <div className="flex justify-between">
            <div className={`-mt-2`}>
              <div className={`text-xl`}>@{name}</div>
              <div className={`text-sm text-zinc-400`}>
                {endorsements} endorsements
              </div>
            </div>
            <div className={`text-soilPurple my-auto text-3xl font-semibold`}>
              {percentage}%
            </div>
          </div>
          <div className={`mt-2 flex`}>
            {skills?.map((skill, index) => (
              <span
                key={index}
                className={`bg-soilPurple/20 mr-2 rounded-full px-2 py-1 text-xs`}
              >
                {skill?.skillInfo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
