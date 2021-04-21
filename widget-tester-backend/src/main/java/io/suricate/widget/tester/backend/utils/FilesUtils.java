package io.suricate.widget.tester.backend.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FilesUtils {

    /**
     * Get all the files inside a given folder
     *
     * @param folder The folder containing the files
     * @return The list of files
     * @throws IOException Exception triggered during the files fetching
     */
    public static List<File> getFiles(File folder) throws IOException {
        if (folder != null) {
            try (Stream<Path> list = Files.list(folder.toPath())) {
                return list.filter((Path path) -> path.toFile().isFile())
                        .map(Path::toFile)
                        .sorted()
                        .collect(Collectors.toList());
            }
        }
        return Collections.emptyList();
    }
}
