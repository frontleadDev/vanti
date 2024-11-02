'use client'
import DistriTermn from '../../components/distri-termn/render'
type PageProps = {
    searchParams: Record<string, string> | undefined;
};
export default function Page({ searchParams }: PageProps) {
    return (
        <>
             <DistriTermn searchParams={searchParams} />
        </>
    );
}
