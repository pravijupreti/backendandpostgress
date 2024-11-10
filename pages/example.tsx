import { prisma } from '../lib/prisma'
import { GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType } from "next"

type props =InferGetStaticPropsType<typeof getServerSideProps>


export default function Page({user}:props){
    return<main>this is from page and the user is {user.name}</main>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = await prisma.user.findFirst({
        where:{
            email:'test@test.com'
        }
    })
    return{
        props:{
            user
        }
    }
}