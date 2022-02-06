import { SimpleGrid, Text } from "@chakra-ui/react";
import { size } from "lodash";
import { useRouter } from "next/router";
import Loader from "../../../components/Loader";
import { Payment } from "../../../components/Payment/Payment";
import SEO_C from "../../../components/SEO_C";
import { useGetProductByID } from "../../../hooks/useProduct";
import SimpleLayout from "../../../layouts/SimpleLayout";

export default function ProductPayment() {
  const { query } = useRouter();

  const { product, images, loading } = useGetProductByID(query?.payment);

  if (loading) return <Loader />;

  console.log(product, images);

  return (
    <SimpleLayout>
      {product && images && !loading && (
        <>
          <SEO_C title={product?.name} description={product?.description} />

          <Payment product={product} images={images} />
          {/* <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            mt={3}
            p={0}
          ></SimpleGrid> */}
        </>
      )}
    </SimpleLayout>
  );
}
