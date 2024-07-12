import { gql, useQuery } from "@apollo/client";

const GET_ALL_POSTS = gql`
  query feature {
  page(id: "features", idType: URI) {
    id
    slug
    featuresec {
      featuresecSubtitle
      featuresecTitle
      featuresecText
      featuresecLink {
        url
        title
        target
      }
    }
  }
}
`;

const Home = () => {
   const { loading, error, data } = useQuery(GET_ALL_POSTS);
   if (loading) return <p className="container text-center mt-5">Loading Page…</p>;
   if (error) return <p>Error :(</p>;
   const featuredata = data.page?.featuresec;
   console.log(featuredata)

   
  return (
   <div>
      <div className="container-xxl py-5">
         <div className="container">
            <div className="row g-5 align-items-center">
               <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <p className="fs-5 fw-bold text-primary">{featuredata?.featuresecSubtitle ?? "Why Choosing Us!"}</p>
                  <h1 className="display-5 mb-4">{featuredata?.featuresecTitle ?? "Few Reasons Why People Choosing Us!"}</h1>
                  <p className="mb-4">{featuredata?.featuresecText}</p>
                  <a className="btn btn-primary py-3 px-4 text-white" href={featuredata?.featuresecLink?.url}>{featuredata?.featuresecLink?.title ?? 'Explore More'}</a>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Home