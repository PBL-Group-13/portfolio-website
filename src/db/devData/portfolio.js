export class Experience {
  constructor({ name, description, start, end }) {
    this.name = name;
    this.description = description;
    this.duration = { start, end };
  }
}

export class Project {
  constructor({ name, description, coverImage, link }) {
    this.name = name;
    this.description = description;
    this.coverImage = coverImage;
    this.link = link;
  }
}

export class SocialLink {
  constructor({ github, facebook, linkedIn, twitter }) {
    this.github = github;
    this.facebook = facebook;
    this.linkedIn = linkedIn;
    this.twitter = twitter;
  }
}
export class Portfolio {
  constructor({
    _id,
    user,
    slug,
    socialLinks,
    about,
    skills,
    education,
    experience,
    projects,
  }) {
    this._id = _id;
    this.user = user;
    this.slug = slug;
    this.socialLinks = socialLinks;
    this.about = about;
    this.skills = skills;
    this.education = education;
    this.experience = experience;
    this.projects = projects;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.__v = 0;
  }
}
