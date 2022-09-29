import { useEffect, useState, useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import ScreenContext from "../../ScreenContext";
import { Header, Post } from "../components";
import { COLORS } from "../constants/theme";
import { fetchPhotosAPI } from "../http/photosAPI";
import { fetchPostsAPI } from "../http/postAPI";
import { fetchUsersAPI } from "../http/userAPI";
import { IPost } from "../models/IPost";

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const { isTablet } = useContext(ScreenContext);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = () => {
    fetchUsersAPI().then((usersData) => {
      const promises: Promise<any>[] = [];
      usersData.forEach((user) => {
        promises.push(
          fetchPostsAPI(user.id, 1).then(async (postsData) => {
            const photosData = await fetchPhotosAPI(user.id, 1);
            return { ...postsData[0], user, photo: photosData[0] };
          })
        );
      });

      Promise.all(promises).then((data) => setPosts(data));
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        key={isTablet ? 2 : 1}
        numColumns={isTablet ? 2 : 1}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <Post post={item} />}
        contentContainerStyle={styles.postsContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  postsContainer: {
    padding: 5,
    flex: 1,
  },
});

export default Posts;
