import { Box, Grid } from "@chakra-ui/react";
import Footer from "../Footer";
import SimpleProduct from "../SimpleProduct/SimpleProduct";
import { motion } from "framer-motion";
import { map } from "lodash";
import { BASE_PATH } from "../../utils/env";
import Loader from "../Loader";
import { setTIndex } from "../../utils/tabIndex";
import { dateParser } from "../../utils/dateParser";
import { fadeInUp } from "../../lib/animations";

const MotionBox = motion(Box);

export default function GridProduct({ products, loading }) {
  setTIndex(0);

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      m={0}
      p={0}
      // variants={fadeInUp}
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: "3", sm: "5", md: "7", lg: "9" }}
      >
        {map(products, (x, index) => (
          <SimpleProduct
            key={index}
            id={x.id}
            name={x.name}
            startingBid={x.starting_bid}
            currentBid={x.current_bid}
            description={x.description}
            date={x.modified && dateParser(x.modified).parserDate}
            category={x.category.name}
            mainImage={` ${BASE_PATH}${x.images.main_image}`}
          />
        ))}
      </Grid>
      <Footer />
    </MotionBox>
  );
}
