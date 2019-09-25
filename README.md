Add CNAME to link with custom domain.

Note that this blog is bilingual: en - English and pl - Polish. Any pair of languages can be used with minor changes to basic page skeleton.

Run ./newpost to create new pots templates in a temporary workspace directory. These will be succesively renumbered copies of the latest post.

Then run ./vimlast to start editing new posts. Note that the directory contains .vimrc file which defines a new 'W' command which writes changes (like 'w') and then calls ./addpost - updating blog structure with the new post.

You can use ./serve to start serving the edited post at http://localhost:8080 (e.g. run it in another terminal window) and thus keep editing new posts (in both languages) and updating the page by using 'W' from within vim.

After the posts are ready simple call:  
git add *  
git commit  
git push  
and your changes will be immediately served online.

Remember to delete the ./workspace directory.

You can use ./vimlast to open the latest post directly as page source file and add any required changes.

You can also use ./vimlast -n to start editing the nth post counting bakward from the most recent post.

You can use ./open n to start editing a post with a specific number.

In all cases vim will be used with split window view to edit simultaneously English and Polish posts.

You can run ./reset in order to erase entire change set history. In that case it makes sense to remove and clone the directory anew in order to end up with a smaller .git directory.
