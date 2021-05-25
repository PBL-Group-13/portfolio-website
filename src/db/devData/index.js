import { Experience, Portfolio, Project, SocialLink } from "./portfolio.js";
import { schoolNames } from "./schoolNames.js";
import faker from "faker";
import generateId from "bson-objectid";
import { User } from "./user.js";
import slugify from "slugify";
import { skills } from "./skills.js";
import { randomBytes } from "crypto";
import { writeFileSync } from "fs";

const randomNo = (max = 4) => Math.floor(Math.random() * max);

const socialLinks = () => {
  return new SocialLink({
    facebook: "https://www.facebook.com/",
    github: "https://github.com/",
    linkedIn: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  });
};

const getExperience = (max = 4) => {
  const data = [];
  for (let i = 0; i <= randomNo(max + 1); i++) {
    const start = faker.date.between(new Date("01-01-2001"), new Date());
    const end = faker.date.between(start, new Date());
    data.push(
      new Experience({
        name: faker.company.companyName(),
        description: faker.lorem.paragraph(),
        start,
        end,
      })
    );
  }
  return data;
};
const getEducation = (max = 4) => {
  const data = [];
  const initStart = faker.date.between(
    new Date("01-01-2005"),
    new Date("01-01-2015")
  );
  const initEnd = faker.date.between(initStart, new Date());
  for (let i = 0; i < randomNo(max) + 1; i++) {
    const school = schoolNames[randomNo(schoolNames.length)];
    const start =
      data.length === 0 ? initStart : data[data.length - 1].duration.end;
    const end =
      data.length === 0 ? initEnd : faker.date.between(start, new Date());

    data.push(
      new Experience({
        name: `${school.name}, ${school.detail}`,
        description: faker.lorem.paragraph(),
        start,
        end,
      })
    );
  }
  return data.sort((a, b) => (a.duration.start > b.duration.start ? -1 : 1));
};

const getSkills = () => {
  const data = [];
  for (let i = 0; i < randomNo(6) + 4; i++) {
    const skill = skills[randomNo(skills.length)];
    data.push(skill.name);
  }
  return data;
};

const getProjects = () => {
  const data = [];
  for (let i = 0; i < randomNo(8); i++) {
    data.push(
      new Project({
        name: faker.company.catchPhrase(),
        coverImage: faker.image.abstract(),
        description: faker.lorem.paragraphs(randomNo(3) + 1),
        link: "https://google.com",
      })
    );
  }
  return data;
};

const getData = () => {
  const userId = generateId().toString();
  const portFolioId = generateId().toString();

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const slug = slugify(
    `${firstName} ${lastName} ${randomBytes(2).toString("hex")}`,
    {
      lower: true,
      remove: /[*+~.`()'"!:@]/g,
    }
  );
  const user = new User({
    _id: userId,
    firstName,
    lastName,
    avatar: faker.image.avatar(),
    password: "12345678",
    birthDate: faker.date.between(
      new Date("01-01-1980"),
      new Date("01-01-2001")
    ),
    description: faker.lorem.paragraphs(),
    email: faker.internet.email(),
    location: faker.address.city(),
    phoneNumber: faker.phone.phoneNumber(),
    portfolio: portFolioId,
    slug,
  });
  const portfolio = new Portfolio({
    user: userId,
    _id: portFolioId,
    about: faker.lorem.paragraphs(randomNo(3) + 1),
    education: getEducation(),
    experience: getExperience(),
    skills: getSkills(),
    slug,
    socialLinks: socialLinks(),
    projects: getProjects(),
  });

  return { user, portfolio };
};

const writeData = (count = 100) => {
  const users = [];
  const portfolios = [];
  for (let i = 0; i <= count; i++) {
    const { portfolio, user } = getData();
    users.push(user);
    portfolios.push(portfolio);
  }

  writeFileSync("./users.json", JSON.stringify(users), { encoding: "utf-8" });
  writeFileSync("./portfolios.json", JSON.stringify(portfolios), {
    encoding: "utf-8",
  });
};

writeData(2000);
