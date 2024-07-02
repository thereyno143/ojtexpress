/*
SQLyog Ultimate v9.62 
MySQL - 5.6.37-log : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `test`;

/*Table structure for table `ojt_names` */

DROP TABLE IF EXISTS `ojt_names`;

CREATE TABLE `ojt_names` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `transdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `ojt_names` */

insert  into `ojt_names`(`id`,`name`,`transdate`) values (1,'Evander','2024-06-28 16:32:49'),(2,'Janiel','2024-06-28 16:32:53'),(3,'Mary Grace Nalual','2024-06-28 16:58:13'),(4,'Mary Grace Nalual','2024-06-28 16:58:53');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`) values (6,'admin','*4ACFE3202A5FF5CF467898FC58AAB1D615029441'),(7,'admin1','*4ACFE3202A5FF5CF467898FC58AAB1D615029441'),(8,'admin2','*4ACFE3202A5FF5CF467898FC58AAB1D615029441'),(9,'jamu','*4ACFE3202A5FF5CF467898FC58AAB1D615029441');

/* Procedure structure for procedure `sp_users_get` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_users_get` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_users_get`()
BEGIN
	SELECT u.username FROM users AS u;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_users_insert` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_users_insert` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_users_insert`(
	in _username varchar(255),
	in _password varchar(255)
    )
BEGIN
	INSERT INTO users (username, `password`) VALUES (_username, PASSWORD(_password));
    END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
