const Logs = ({ data }) => (
    <div className="flex flex-col items-left mt-12 p-4 bg-white rounded-md h-96 w-10/12 shadow-inner">
        <p className="monospace overflow-scroll text-black">{data.logs}</p>
    </div>
);

export default Logs;

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/logs');
    const data = await res.json();

    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: { data }
    };
}
