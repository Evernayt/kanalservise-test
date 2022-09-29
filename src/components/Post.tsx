import { FC, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ScreenContext from "../../ScreenContext";
import { COLORS } from "../constants/theme";
import { IPost } from "../models/IPost";

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }) => {
  const { isTablet } = useContext(ScreenContext);
  return (
    <View style={[styles.container]}>
      {isTablet && (
        <Image source={{ uri: post.photo.url }} style={styles.photo} />
      )}
      <Text style={styles.text}>{`Autor: ${post.user.name}`}</Text>
      <Text style={styles.text}>{`Company: ${post.user.company.name}`}</Text>
      <Text style={styles.text}>{`Title: ${post.title}`}</Text>
      {isTablet && <Text style={styles.text}>{post.body}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.secondary,
    borderRadius: 6,
    padding: 25,
    flex: 1,
    margin: 10,
  },
  photo: {
    width: 150,
    height: 150,
    marginBottom: 22,
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 8,
  },
});

export default Post;
