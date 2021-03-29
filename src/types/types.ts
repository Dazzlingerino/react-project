export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe:string
    contacts: ContactsType
    photos: PhotosType
}
export type PhotosType = {
    small: string | undefined
    large: string | undefined
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}