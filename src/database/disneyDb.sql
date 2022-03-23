-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: disney
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `genero`
--

DROP TABLE IF EXISTS `genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genero` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Imagen` varchar(100) NOT NULL,
  `Pelicula_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Peliculas_id_idx` (`Pelicula_id`),
  CONSTRAINT `fk_pelicula` FOREIGN KEY (`Pelicula_id`) REFERENCES `pelicula` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genero`
--

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;
/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pelicula`
--

DROP TABLE IF EXISTS `pelicula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pelicula` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Imagen` varchar(100) NOT NULL,
  `Titulo` varchar(45) NOT NULL,
  `FechaDeCreacion` datetime NOT NULL,
  `Calificacion` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pelicula`
--

LOCK TABLES `pelicula` WRITE;
/*!40000 ALTER TABLE `pelicula` DISABLE KEYS */;
/*!40000 ALTER TABLE `pelicula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personaje`
--

DROP TABLE IF EXISTS `personaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personaje` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Imagen` varchar(100) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Edad` int NOT NULL,
  `Peso` int NOT NULL,
  `Historia` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personaje`
--

LOCK TABLES `personaje` WRITE;
/*!40000 ALTER TABLE `personaje` DISABLE KEYS */;
/*!40000 ALTER TABLE `personaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personaje_pelicula`
--

DROP TABLE IF EXISTS `personaje_pelicula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personaje_pelicula` (
  `id` int NOT NULL AUTO_INCREMENT,
  `personaje_id` int NOT NULL,
  `pelicula_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_personaje_idx` (`personaje_id`),
  KEY `fk_pelicula_idx` (`pelicula_id`),
  CONSTRAINT `fkPeliculas` FOREIGN KEY (`pelicula_id`) REFERENCES `pelicula` (`id`),
  CONSTRAINT `fkPersonajes` FOREIGN KEY (`personaje_id`) REFERENCES `personaje` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personaje_pelicula`
--

LOCK TABLES `personaje_pelicula` WRITE;
/*!40000 ALTER TABLE `personaje_pelicula` DISABLE KEYS */;
/*!40000 ALTER TABLE `personaje_pelicula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jorga','az@gmail.ef','$2b$10$/IPo11lbHwnnBRC.gHfV/O0WkXhRG2muOOi/FF4ovponQrmmmt7Eq'),(2,'jorge','az@azr.es','$2b$10$A5IgyuPa1PP9rMLAgz2y9uLHUArOO0SybD0f/QH7PLK5qLXwMegUC'),(3,'diego','az@gmail.ef','$2b$10$70.BNkqEHpeZhZG/VNOaBejqYU/hQvkhKcXiSbnPgQ1FpH1sQ5ZCy'),(4,'diego','az@gmail.ef','$2b$10$yBGJey0VTQLDkxUZE4TQGOyPRft6k4w0DjVlWL27GOQMBHJELSAJu'),(5,'diego diaz','az@gmooail.ef','$2b$10$de5DE.tyRE.V1ZR3tetWNOlAGRkgKo3wdXGDiu72dXQD/xCPvrCAu'),(6,'diego diaaz','az@gmooail.ef','$2b$10$QHti9GZ2xbf7x/bc9LwU0./08WMKuhP7JdoYS1uKGB99ERdHtAchK'),(7,'diego','diegaasao@gmail.com','$2b$10$WQqpaxoV1bPptyF5lJ9Z0.SHIty984FXeQMS/Ebz0Lsk2PbmEITea'),(8,'diego','diegaasao@gmail.com','$2b$10$7Ytz/PLXPECBUOzRYTvXp.6EY3ZYilH14SmKoVTRlTHfx82pndioK'),(9,'diego','diegaasao@gmail.com','$2b$10$fHCuQL66oopVuhIrrQD6SO9OrZps6tBdg/IRPS6AsHvaxm2EoKvmq'),(10,'diego','diegaasao@gmail.com','$2b$10$q/wxN7BHMv.ldCLtcUOtae0itqryDcZ.AHMOR18hU.quiEFquKveq'),(11,'diego','diegaasao@gmail.com','$2b$10$gaZNRJbo97o22.Vg/6Ssme.yKw11cUFxOOjXETKVfpHTXfWb/7zYG'),(12,'diego','diegaasao@gmail.com','$2b$10$rhhxOrokM8M8zAiipmG/GuT61i/IMso.vG6C.cNbFF3eNC45/Y4/S'),(13,'diego','diegaasao@gmail.com','$2b$10$VGkqmKD1tkkIiGgPTvGkV.UKCy9uIgCGF6qeRfN7bs36Hmoou/hji'),(14,'diego','diegaasao@gmail.com','$2b$10$I/pj04.4n5dTjBTfIPbDteVVYt5HEMSQ1tXRn/4NUm4GPdvD1EZem'),(15,'diego','diegaasao@gmail.com','$2b$10$10GZL4DRe9hwkUU6H9hTA.PzB4JMKIWTfxC0E9fB2EwLhWPPoJENW'),(16,'jorge','az@azr.es','$2b$10$7bUCcbVAUK/9zo9WDmLMCOl3MuElKUBLdvE7Kxyp1..9qaRRTpGW2'),(17,'jorge','az@azr.es','$2b$10$jZ9hVbmiCDFw8kbypmK9tOTKdbwrEAxy7iGybfa9kQGKnCa.3KVbS'),(18,'jose','jose@gmail.com','$2b$10$X01zqM9CS0.mvQfaxUb4WOXga1AZ/sSGFVVs9GDhKuV4jdRxsLF6K'),(19,'jose','jose@gmail.com','$2b$10$oSIrSTLLpe6LR.Q6wtHk3OYGK7byADikYi17aOvIb3oE/TPiF9Eqe'),(20,'jose','jose@gmail.com','$2b$10$AED8Ft5mIG6VGZklYEFzm.6b0JMIh/KBI1sCkFwXrigu2mbTbTEHq'),(21,'jose','jose@gmail.com','$2b$10$nEOxGu9Z3LsI9a4b9gG3qOQQA3H/fAh/VgzLrZIbU.fVNy.BaiW2e'),(22,'jose','jose@gmail.com','$2b$10$A0h5DriX9ky5EN1XNnWuheQF/u9xkgShEAUMK8XI0EJUrzxmW99J.'),(23,'jose','jose@gmail.com','$2b$10$P.7D/tfN5u3rXNely4Ci4ucfbnXczNNEDGQcQiaJTsmgLa9PyTxWi'),(24,'jose','jose@gmail.com','$2b$10$E8rTIsJTfJaM5RT9W4l7jO/uL/C.ZaUMhjC.1UF.rhyw5iuh4a2qC'),(25,'jose','jose@gmail.com','$2b$10$rCqdOXK6mRD98EXZorWsEO0UTLjWiD4cqkdNFCSWsjgbgT4AtegKK'),(26,'diego','diegaasao@gmail.com','$2b$10$NCFzuTCjMRKO0guhJVucvuy98.HeGry2lfCu.Ubr9Er11Y7nCvOEa'),(27,'diego','diegaasao@gmail.com','$2b$10$iN4wxNXzdpP1gP5FVbMQIew2.CLOI3TmmEnDcQ51QYvglD/nPrqYK'),(28,'diego','diegaasao@gmail.com','$2b$10$RSrCAlOvyQVPBL2w6Lqn9ObHNiGa.CfcIfZZ6V08bQsBE8rEIdjP.'),(29,'diego','diegaasao@gmail.com','$2b$10$2/4ZkcYNQA3Re1.vbzrHpOUIPhdp5nUsTaUFCIn9fOWrHIg5.fv0S'),(30,'diego','diegaasao@gmail.com','$2b$10$GMDZkI8KIqcx8dErq9nG/uRH0W4i6KEZzT3VHwgf5hcUX9zcBKWAu'),(31,'diego','diegaasao@gmail.com','$2b$10$s7.QxKJRsLDARtJmzbR6leaq321dz4jaqs2CCQ59pIMbupkAUQ7oa'),(32,'diego','diegaasao@gmail.com','$2b$10$u5FjFPrOcv4xuZWndtYese2opKbNzlA0JqdVlHcmoO.pduuYMIh32'),(33,'diego','diegaasao@gmail.com','$2b$10$L4NQK1ufte6bDaiCvZR5DOgFydpvu.F2H.TwAi1t8BlSpMBYXcBrG'),(34,'diego','diegaasao@gmail.com','$2b$10$r7YLQY9VyaR/lYxle1kem.5ChTCyp.zBOoj3ASPg4pquI3L/KOVYi'),(35,'diego','aa@gmail.com','$2b$10$spbresmYURFT/ClFo09wvOzgRtJDp7jK0OlB/NwXXaS3ACSi/xLga'),(36,'diego','aa@gmail.com','$2b$10$Gl6QWKqu.3t/6UIjgY3EZu9AxGnaIPof.PPA0P/mv8VW.6D/z6UVm'),(37,'diego','aa@gmail.com','$2b$10$iEOSBLaDjnw/g/aurkaoauTxujPV3HoXXi7xIFVZ65kuZkM5DfDgS'),(38,'diego','aa@gmail.com','$2b$10$1GQzkmAYEOR0BF0CTxyCH.Dkw7v5SpEy2OQzDvn9PotQAWwCrKthq'),(39,'diego','aa@gmail.com','$2b$10$k3F7ua.yvH1wtFjhcaPX7O7Zg4yV08Y5TwLvidEDslCJ9sd5HeF/K'),(40,'diego','aa@gmail.com','$2b$10$I92D9A66PDXohr7M/UeEJustl20p3AlNF3TSU2oE7nlwKUsPg8sLK'),(41,'diego','aa@gmail.com','$2b$10$nbzQOGDXkQyqBWHilFoVEORw/FVHSa7kFWQXlxkfikZlYiMlYLaw.'),(42,'diego','aa@gmail.com','$2b$10$x3KtW0POHMFerIIyvTicP.AH1Rst3jgbwz13iSWmAhyFS5o5AVpLu'),(43,'diego','aa@gmail.com','$2b$10$ukIVZsOxfzk2dpmmtXoUk.WaIEsem/WjxBbAbeTe1Bk9bygZqE63O'),(44,'diego','aa@gmail.com','$2b$10$7.CFQ1s5f91lvTgbo15EOeudRljd.DfVc4nMfnMPtBOTotSRAUYyG');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-23 19:41:53
