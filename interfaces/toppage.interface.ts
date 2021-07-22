export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products
}

export interface TopPageAdvantage {
  _id: string,
  title: string,
  description: string
}

export interface HhData {
  _id: string,
  count: string,
  juniorSalary: number,
  middleSalary: number,
  seniorSalary: number,
  updateAt: Date
}

export interface TopPageModel {
  _id: string
  tags: string[]
  title: string
  alias: string
  secondCategory: string
  category: string
  seoText?: string
  tagsTitle: string
  metaTitle: string
  metaDescription: string
  firstCategory: number
  advantages?: TopPageAdvantage[],
  createAt: Date,
  updateAt: Date,
  hh?: HhData
}